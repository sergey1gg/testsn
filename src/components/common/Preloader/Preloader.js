import preloader from '../../Navbar/icon/preloader.svg'
let Preloader=(props) => {
    return (
        <div style={{position: 'absolute',top: '50%',left: '50%',marginLeft:'-50px',marginTop:'-50px'}}>
        <img src={preloader} />
        </div>
    )
}
export default Preloader