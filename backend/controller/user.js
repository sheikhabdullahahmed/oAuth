import checkJwt from '../middlware/index'

app.get("/profile", checkJwt, (req, res) => {
  res.json({
    message: "Protected Route"
  });
});