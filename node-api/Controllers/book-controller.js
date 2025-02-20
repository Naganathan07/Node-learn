const Book = require('../Models/book');

const getAllBooks = async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success:true,
                message:'List of Books fetched successfully',
                data:allBooks
            })
        }
        else{
            res.status(404).json({
                    success:false,
                    message:'No Books found in Collection'
                })
            }
        }catch (e) {
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong !please try again'
        })
    }
    
};

const getBookById = async(req,res)=>{
    try {
        const getBookId = req.params.id;
        const getById = await Book.findById(getBookId);
        if(!getById){
            return res.status(404).json({
                success:false,
                messge:'No Books with this id'
            })
        }

        res.status(200).json({
            sucess:true,
            message:getById
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong !please try again'
        })
        
    }
    
};

const AddnewBook = async (req,res) =>{
    try {
        const newBookData = req.body;
        const newlyCreatedBook = await Book.create(newBookData);
        if(newlyCreatedBook){
            res.status(201).json({
                sucess:true,
                message:'Book added Successfully',
                data:newlyCreatedBook,
            });
        };
        
    } catch (e) {
        console.log(e); 
        res.status(500).json({
            success:false,
            message:'Something went wrong !please try again'
        })  
    }
};

const UpdateBook = async(req,res)=>{
    try {
        const getBookById = req.params.id;
        const updatedBookdata = req.body
        const updatebookById = await Book.findByIdAndUpdate(getBookById,updatedBookdata,{
            new:true,
        });
        if(!updatebookById){
            res.status(404).json({
                success:true,
                message:'No Books with the Id '
            })
        }

        res.status(200).json({
            success:true,
            message:'book updated successfully',
            data:updatebookById
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong !please try again'
        }) 
        
    }
    
};

const deleteBook = async(req,res)=>{
    try {
        const currentBookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(currentBookId);
        if(!deleteBook){
            return res.status(404).json({
                success:false,
                messge:'No Books with this id'
            })
        }

        res.status(200).json({
            success:true,
            message:deleteBook
        })
        
    } catch (e) {

        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong !please try again'
        })  
        
    }
    
};

module.exports ={getAllBooks,getBookById,AddnewBook,UpdateBook,deleteBook}