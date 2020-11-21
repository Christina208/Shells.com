using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Requests.Videos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Services
{
    public interface IVideoService
    {
        int Add(VideoAddRequest model, int userId);
        Video Get(int id);
        void Update(VideoUpdateRequest model);
        void Delete(int id);
        List<Video> GetTop();
        Paged<Video> GetQueryPaginate(int pageIndex, int pageSize, string query);
    }
}
