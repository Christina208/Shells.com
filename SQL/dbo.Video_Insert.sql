USE [Shells]
GO
/****** Object:  StoredProcedure [dbo].[Video_Insert]    Script Date: 11/20/2020 7:46:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[Video_Insert]
	@Id INT OUT,
	@Title NVARCHAR(100),
	@ReleaseDate NVARCHAR(100),
	@Type NVARCHAR(100),
	@Synopsis NVARCHAR(100),
	@CoverPicture NVARCHAR(100),
	@UserRating NVARCHAR(100),
	@UserId NVARCHAR(128)
AS
/*
	DECLARE
		@_id INT,
		@_title NVARCHAR(100) = 'Wrecked',
		@_releaseDate NVARCHAR(100) = 'June 14, 2016',
		@_type NVARCHAR(100) = 'TV Show',
		@_synopsis NVARCHAR(100) = 'The series is about a group of people stranded on an island, after their airplane crashed in the ocean and is a parody of Lost. ',
		@_coverPicture NVARCHAR(100) = 'url',
		@_userRating NVARCHAR(100) = '7.2/10',
		@_modifiedBy NVARCHAR(128) = 'user';
	
	EXEC dbo.Video_Insert
		@_id OUT,
		@_title,
		@_releaseDate,
		@_type,
		@_synopsis,
		@_coverPicture,
		@_userRating,
		@_modifiedBy;
		
	SELECT * FROM dbo.Video WHERE Id = @_id;
*/
BEGIN
	INSERT INTO
		dbo.Video (
			Title,
			ReleaseDate,
			[Type],
			Synopsis,
			CoverPicture,
			UserRating,
			UserId
		) VALUES (
			@Title,
			@ReleaseDate,
			@Type,
			@Synopsis,
			@CoverPicture,
			@UserRating,
			@UserId
		);
	
	SET @Id = SCOPE_IDENTITY();
END