USE [Shells]
GO
/****** Object:  StoredProcedure [dbo].[Video_Delete]    Script Date: 11/20/2020 7:46:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[Video_Delete]
	@Id INT
AS
/*
	DECLARE @_id INT = 1;
	EXEC dbo.Video_Delete @_id;
*/
BEGIN
	DELETE
		dbo.Video
	WHERE
		Id = @Id
END