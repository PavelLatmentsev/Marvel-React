const ModernComponent = ({children}) => {
    return ( 
        <>
        <h1>Hello im Child</h1>
        {children}
        <h1>Hello im Child</h1>
        </>

     );
}
 
export default ModernComponent;