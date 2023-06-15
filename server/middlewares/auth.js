import jwt from 'jsonwebtoken'

const auth =(req, res, next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]

        let deocdeData = jwt.verify(token, 'test')
        req.userId =deocdeData?.id

        next()
    } catch (error) {
        
    }
}

export default auth