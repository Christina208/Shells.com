USE [Shells]
GO
/****** Object:  StoredProcedure [dbo].[Video_Search]    Script Date: 11/20/2020 7:47:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER proc [dbo].[Video_Search]
			@pageIndex int 
			,@pageSize int
			,@Query nvarchar(100)


As



/*


DECLARE @pageIndex int = 0
DECLARE @pageSize int = 5
DECLARE @Query nvarchar(100) = 'W'

Execute [dbo].[Video_Search]
		@pageIndex
		,@pageSize
		,@Query


*/

Begin

Declare @offset int = @pageIndex * @pageSize

	  SELECT[Id],
			[Title],
			[ReleaseDate],
			[Type],
			[Synopsis],
			[CoverPicture],
			[UserRating],		
			TotalCount = COUNT(1) OVER()
  FROM [dbo].[Video]
  where 	(Title LIKE '%' + @Query + '%')
  ORDER BY Id

	
	OFFSET @offSet Rows
	Fetch Next @pageSize Rows ONLY

	End