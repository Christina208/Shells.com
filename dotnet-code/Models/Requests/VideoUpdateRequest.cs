using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Requests.Videos
{
    public class VideoUpdateRequest : VideoAddRequest, IModelIdentifier
    {
        public int Id { get; set; }
    }
}
