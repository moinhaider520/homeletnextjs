export default function Topbar(){
    return(
        <div class="top-header"  style={{background:'#252c41'}}>
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-md-6"  style={{padding:'5px 0px 5px 0px'}}>
                        <div class="cn-info">
                            <ul style={{fontSize:'14px',color:'#fff'}}>
                                <li><i class="fa fa-phone"></i>&nbsp;&nbsp;UAN 033 1111 0353</li>
                                <li><i class="fa fa-envelope"></i>&nbsp;&nbsp;Support@homelet.pk</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <ul class="top-social" style={{float:'right',padding:'5px 0px 5px 0px',fontSize:'14px',color:'#fff'}}>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}