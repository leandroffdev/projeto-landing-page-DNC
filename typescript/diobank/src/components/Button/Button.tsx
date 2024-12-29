import './Button.css'
export const Button = ({children}: any) => {
    function action() {
        window.alert("Olá mundo")
    }
    return(
        <button className='btn' onClick={action}>{children}</button>
    )
} 