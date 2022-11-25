import React from 'react'

const Footer = () => {
        const year = new Date()
       const  updatedYear = year.getFullYear()
    
       return(
       <footer>
         <p>Copyright &copy; {updatedYear}</p>
       </footer>
      )
    
}

export default Footer