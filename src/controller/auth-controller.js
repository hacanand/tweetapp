export const login = async(req,res)=> {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if(!user) {
            return res.status(401).json({
                message: 'no user found',
                success:false,
            })
        }
        if (!user.comparePassword(req.body.password)) {
            return res.status(401).json({
                message: 'wrong password',
                success:false,
            })
        }
        const token = user.gen.JWT();
        return res.status(200).json({
            success: true,
            message: 'user found and logged in',
            data: token,
            err:{},
        })
    } catch (error) {
        
    }
}