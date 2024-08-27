import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


/////////////////////////GET/////////////////////////////////////
export const getproduct=createAsyncThunk('/getproduct',async()=> {

try {

 let resultat= axios.get('site-commerce-ivory.vercel.app/product/all')  
 return await resultat;
    
} catch (error) {
    console.log(error)    
}
})
/////////////////////////ADD//////////////////////////////////////////
export const addproduct=createAsyncThunk('/addproduct',async(newproduct)=> {

  try {
  
   let resultat= axios.post('site-commerce-ivory.vercel.app/product/add',newproduct)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })
//////////////////////delete////////////////////////////////////////

export const deleteproduct=createAsyncThunk('/deleteproduct',async(id)=> {

  try {
  
   let resultat= axios.delete(`site-commerce-ivory.vercel.app/product/${id}`)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })
///////////////////////////update////////////////////////////////
export const updateproduct=createAsyncThunk('/updateproduct',async({id,upproduct})=> {

  try {
  
   let resultat= axios.put(`site-commerce-ivory.vercel.app/product/${id}`,upproduct)  
   return await resultat;
      
  } catch (error) {
      console.log(error)    
  }
  })


const initialState = {
    product:null,
    status:null ,

}

export const productSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
builder 

//get
.addCase (getproduct.pending , (state) => {
state.status ="pending";
})

.addCase (getproduct.fulfilled, (state,action) => {
state.status ="success"
state.product=action.payload?.data?.product ;          
})

.addCase(getproduct.rejected , (state) => {

    state.status="fail";
}) 

//add
.addCase (addproduct.pending , (state) => {
  state.status ="pending";
  })
  
  .addCase (addproduct.fulfilled, (state) => {
  state.status ="success"
  
  })
  
  .addCase(addproduct.rejected , (state) => {
  
      state.status="fail";
  })

  //delete 

  .addCase (deleteproduct.pending , (state) => {
    state.status ="pending";
    })
    
    .addCase (deleteproduct.fulfilled, (state) => {
    state.status ="success"
    
    })
    
    .addCase(deleteproduct.rejected , (state) => {
    
        state.status="fail";
    })

    //Update 
    .addCase (updateproduct.pending , (state) => {
      state.status ="pending";
      })
      
      .addCase (updateproduct.fulfilled, (state) => {
      state.status ="success"
      
      })
      
      .addCase(updateproduct.rejected , (state) => {
      
          state.status="fail";
      })
  




  }
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer