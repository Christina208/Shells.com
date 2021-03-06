USE [Shells]
GO
/****** Object:  StoredProcedure [dbo].[Video_SelectAll]    Script Date: 11/20/2020 7:47:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[Video_SelectAll]
AS
/*
	EXEC dbo.Video_SelectAll;
*/
BEGIN
	SELECT 
		Id,  -- primary key
		Title,
		ReleaseDate,
		[Type],
		Synopsis, 
		CoverPicture,
		UserRating,
		UserId
	  FROM
		dbo.Video
END