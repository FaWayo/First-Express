const postRouter = require('express').Router()
const Post = require('../models/post')
const { response } = require('express')


//get all posts
postRouter.get('/', (req,res, next)=>{
     Post.find({})
    .then(res =>{
        response.status(200).send(posts)
        next()
    })
})

//create new post
postRouter.post('/newpost', async(request,response,next)=>{
    const{title, content} = request.body
    console.log(request.body)
    const postCount = await Post.countDocuments()

    if(title && content){
            const newPost = new Post({
            id: postCount + 1,
            title: title,
            content: content
           
        })

        newPost.save()
        .then(res=>{
            response.status(201).send({message: 'Post Added'})
        })
        .catch(err=>{
            console.log(err)
        })   
    }
    else{
        response.status(400).send({message: "you are missing a title or content"})
    }
})
    
//get post by author
postRouter.get('/:author', async(req, res)=>{
    await Post.findByAuthor({})
    .then(res=>{
        response.status(200).send(post)
    })
    .catch(err=>{
        console.log(err)
        response.status(500).send({error: 'Server Error'})
    })
})

//get specific blog post by params(id, author, title, datecreated)
postRouter.get('/:params', async(request, response)=> {
    await Post.findByParams(request.params)
    .then(res=>{
        response.status(200).send(post)
    })
    .catch(err=>{
        console.log(err)
        response.status({error: 'Server Error'})
    })
})    
       
//update blog post(content and votes)
postRouter.put('/:id', async(request, response)=>{
   await Post.findByIdAndUpdate(post.id,body)
   .then(updatedUpdate=>
    response.status(200).send(updatedUpdate))

    .catch((err)=>{
        console.log(error)
        response.status(500).json({error: 'Internal Server Error'})
    })
})

//delete blogpost by id
postRouter.delete('/:id', async (request, response)=> {
    await Post.deleteOne(request.params.id)
        
    .then(res=>{
        response.status(204).json({status: errorMessages.RESOURCE_DELETED_204})
    })
    .catch(err=>{
        console.log(err)
        response.status({error: 'Server Error'})
    })

})

module.exports = postRouter
