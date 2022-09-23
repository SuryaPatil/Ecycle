const router = require("express").Router()
pool = require("../db")
const authorization = require("../middleware/authorization")

router.get("/", authorization, async (req, res)=>{
    try{
        //req.user has the payload
      //  res.json(req.users)
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user])
        res.json(user.rows[0]);
    }
    catch(err){
        console.error(err.message)
        res.status(500).json("Server error")
    }
})

module.exports = router;