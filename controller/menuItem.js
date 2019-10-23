var menuItemDal=require('../dal/menuItem')
///Find Menus that are in specific given catagory
exports.findMenuItems=(req,res)=>{
    
    menuItemDal.findMenuItems({catagory:req.body.catagory},(err,menuItems)=>{
        if(err){
            res.json({
                messsage:'Menu Item Not Found',
                status:400,
                error:true
            })
        }
        else{
            res.json(menuItems)
        }

    })
    
    }
   
    


 exports.createFoodItem=function createFoodItem(req,res,next) {
        menuItemDal.create(req.body, function callback(err, food) {
        
            if (err) {
                return next(err);
            }

            // On Success emit create profile event
            res.json(food);
        });
  

    
    }
