using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Requests.Videos
{
    public class VideoAddRequest
    {

        public string Title { get; set; }
    
        public string ReleaseDate { get; set; }
     
        public string Type { get; set; }
    
        public string Synopsis { get; set; }
       
        public string CoverPicture { get; set; }
       
        public string UserRating { get; set; }
    }
}
