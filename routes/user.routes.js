const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get( 
    "/api/land/all", controller.allAccess);

  app.get(
     "/api/land/user", 
    [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/land/teacher",
    [authJwt.verifyToken, authJwt.isTeacher], controller.teacherBoard
  );

  app.get(
    "/api/land/admin",
    [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard
  );
};