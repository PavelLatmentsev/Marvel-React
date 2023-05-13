const withHOC = (Component)=>(props) => {

    console.log("Hello World")
    console.log(props.test)
    return ( 
        <>
             <p>Hello Im Hoc</p>
            <Component {...props}/>
        </>


     );
}
 
export default withHOC;