import express from 'express';
const router=express();

// Example route for getting all items from MongoDB
router.get('/', async (req, res) => {
  res.status(200).send({message:"welcome to online food ordering website!"})
});



export default router;