using Sabio.Data;
using Sabio.Data.Providers;
using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Requests.Videos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Sabio.Services
{
    public class VideoService : IVideoService
    {
        IDataProvider _data = null;

        public VideoService(IDataProvider data)
        {
            _data = data; 
        }
  

        public int Add(VideoAddRequest model, int userId)
        {
            int id = 0;
            string procName = "[dbo].[Video_Insert]";
            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    AddCommonParams(model, col);
                    col.AddWithValue("@UserId", userId);
                    SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);
                    idOut.Direction = System.Data.ParameterDirection.Output;
                    col.Add(idOut);
                },
                returnParameters: delegate (SqlParameterCollection returnCollection)
                {
                    object oId = returnCollection["@Id"].Value;
                    int.TryParse(oId.ToString(), out id);
                    Console.WriteLine("Add request functioning!");
                });
            return id;
        }
        
        public Video Get(int id)
        {
            string procName = "[dbo].[Video_SelectById]";
            Video video = null;
            _data.ExecuteCmd(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@Id", id);

            }, delegate (IDataReader reader, short set)
            {
                int index;
                video = MapVideo(reader, out index);
            }


            ) ;
            return video;
        
        
        }

        public void Update(VideoUpdateRequest model)
        {
            string procName = "[dbo].[Video_Update]";
            _data.ExecuteNonQuery(procName,
               inputParamMapper: delegate (SqlParameterCollection col)
               {
                   AddCommonParams(model, col);
                   col.AddWithValue("@Id", model.Id);
               },
               returnParameters: null);                                   
        }
        public void Delete(int id)
        {
            string procName = "[dbo].[Video_Delete]";
            _data.ExecuteNonQuery(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@Id", id);
            });

        }
        public List<Video> GetTop()
        {
            List<Video> list = null;
            string procName = "[dbo].[Video_SelectAll]";
            _data.ExecuteCmd(procName, inputParamMapper: null
            , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int index;
                    Video video = MapVideo(reader, out index);
                    if (list == null)
                    {
                        list = new List<Video>();
                    }
                    list.Add(video);
                }
                );
            return list;
        }
        public Paged<Video> GetQueryPaginate(int pageIndex, int pageSize, string query)
        {
            Paged<Video> pagedResult = null;
            List<Video> result = null;
            int totalCount = 0;
            _data.ExecuteCmd(
                "[dbo].[Video_Search]",
                inputParamMapper: delegate (SqlParameterCollection parameterCollection)
                {
                    parameterCollection.AddWithValue("@PageIndex", pageIndex);
                    parameterCollection.AddWithValue("@PageSize", pageSize);
                    parameterCollection.AddWithValue("@query", query);

                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int index;
                    Video video = MapVideo(reader, out index);

                    if (totalCount == 0)
                    {
                        totalCount = reader.GetSafeInt32(index++);
                    }
                    if (result == null)
                    {
                        result = new List<Video>();
                    }
                    result.Add(video);
                }
            );
            if (result != null)
            {
                pagedResult = new Paged<Video>(result, pageIndex, pageSize, totalCount);
            }
            return pagedResult;
        }
        public static void AddCommonParams(VideoAddRequest model, SqlParameterCollection col)
        {
            col.AddWithValue("@Title", model.Title);
            col.AddWithValue("@ReleaseDate", model.ReleaseDate);
            col.AddWithValue("@Type", model.Type);
            col.AddWithValue("@Synopsis", model.Synopsis);
            col.AddWithValue("@CoverPicture", model.CoverPicture);
            col.AddWithValue("@UserRating", model.UserRating);
        }
        private static Video MapVideo(IDataReader reader, out int index)
        {
            Video model = new Video();
            index = 0;
            model.Id = reader.GetSafeInt32(index++);
            model.Title = reader.GetSafeString(index++);
            model.ReleaseDate = reader.GetSafeString(index++);
            model.Type = reader.GetSafeString(index++);
            model.Synopsis = reader.GetSafeString(index++);
            model.CoverPicture = reader.GetSafeString(index++);
            model.UserRating = reader.GetSafeString(index++);

            return model;
        }
    }
}
