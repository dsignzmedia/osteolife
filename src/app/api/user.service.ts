import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';

var localToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE4ZGZkMzNlNGQ3NGExMDBiNTA4ODc4ZDE3NzQ3M2U0ZTdiMzA4OTIxYWQ5YTM0ZjYyYWFiYjk2OWY0YThiNzJjOThhNzZmOGY2ZWQ1NjBkIn0.eyJhdWQiOiIxIiwianRpIjoiYThkZmQzM2U0ZDc0YTEwMGI1MDg4NzhkMTc3NDczZTRlN2IzMDg5MjFhZDlhMzRmNjJhYWJiOTY5ZjRhOGI3MmM5OGE3NmY4ZjZlZDU2MGQiLCJpYXQiOjE1NDg5MTI1MTIsIm5iZiI6MTU0ODkxMjUxMiwiZXhwIjoxNTgwNDQ4NTEyLCJzdWIiOiIxNyIsInNjb3BlcyI6W119.HbEtW3cH8g2VLRqUxqG-6PC9scH0B-OKcfLtnmEodc1aZB_5kvJyBkIaoitukvrtCnGLKEE1cV8G-8kZMfgfqUhz-uMq_Nmcap4PAlMAXxFJpM_zDzqdGAcIf3QkYdzBprPAnydVmofZ8qaxkeIb43L4dE-ciEEf1R9bHEJjbYY63Rxqojqr63gOKe1To5U5OybZWqkWqB-aF0G7MCeEBNV6G4Uh2DicQCiaG3AlPv6ADbyV79dOHaWYXPqtIBadtRfNDxDHMNZjZ7xO37nxUZIL-SeSxza3sfvU_kz4AZu62BmakJsexLMCO6y6TOAmJ1TgoY1HpHFMJYRj-7zOuVelGy9yv5UQxpfftrMRmLlE1Nnf7lltOPM8XDvQ1r2OrHaw9AwA9sOawqE8n55b-QzxdKHy8r-V4e4Etz-Nrcxxl951aRL3utsCyFYx4Ul6myt2PmLPBLirZ6Gr9R2ng_aerIgIohT_4Ho0U0z_zXdSelRLWwOCp4AjRXbzVAZvW0qkc_m3vvBuv9F4bEZP55KaqCuZy9YcboQqv3p918Dsu_DQ4oAMProKBkmDRXQ_QNoBt7x0Hfug5SoJ9gPzOgd0NdZEYA0a7kpp6zCyuTIlDttlXNqn01VjjRS4renw1iX981O2m3d6QeqmD0hRP0IBz_xVuTtZnEtZuyQo2nM';
var liveToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmMWZkMDkyNDZkYjdmOWZjNjNkNDU5ODJkMTA4ODYzZTlhM2RlYTgxNGZiYWQwMDEwMjFkZTI1NWRlYzdiYmUyMDZlZWNhNjRlYjdhZGIwIn0.eyJhdWQiOiIxIiwianRpIjoiOWYxZmQwOTI0NmRiN2Y5ZmM2M2Q0NTk4MmQxMDg4NjNlOWEzZGVhODE0ZmJhZDAwMTAyMWRlMjU1ZGVjN2JiZTIwNmVlY2E2NGViN2FkYjAiLCJpYXQiOjE1NDg4NTc5NTIsIm5iZiI6MTU0ODg1Nzk1MiwiZXhwIjoxNTgwMzkzOTUyLCJzdWIiOiIyMjIiLCJzY29wZXMiOltdfQ.mvnO6iqlN3rk8LRB0O0ldkv98Jc1y_zSUh31hbCZeKHHYUXhsKCTU_GpgEv4myvqphaLgaJctYFsirUj5K4G1ZMNU8EA85TxHGaGrSUuBJVAbMyE8lVnKNAgs86N6sm22gJsRwq3YNT7vaD_gaGaRT1Qn_n1MsWGs09gRrms6w_QPMi2jLl7cv2Uv3ERhaS4FQhqElkarZQkg9Vsxw82YA0t7RBVAdtpQJ0JHfZuAkEYZXbtPjerGxDFpGIVK7zqF15XthPy8qDE2fBw4q3He2Ckv56ilntoALHx6DpOt8LKdTyrAx49ONc4n2Ab0k72kb2J9Bbs_U8EUiDlsp3cBSMhmtQrCguWKHoNf_FWYgsLZPcAxGJiVc4WkKODtYDOW4F3lXBsRRn11nueGa3G_rmRlI_OhYwAHX1vckjBgtxg6w5ccq-ECSsc89HPSrHk4gswsHAz81S7FbZJFtSj4ommonOQ5aGvoLtUeIsGRl-0S3BayIC4SJicPoC2qTeN99CGMcgjmlWnNaUTzJDGrZezKjVLLGy2d5PlV8ofchb2vsRh1SZb75s0HYI-ePUObYgt1ePf2iuISDA304imhELqMV1X6PCnVCD0SfoAzRxl6RFgncT4LRwNe3dlQw0TK6BELQKd8JANiYtbDh_WRDdgGRjx0vDW0QR2A812FjE';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl_ostio : string = "http://osteolifebiomedical.com/api.php";
  public baseUrl : string = "https://toptechrealty.com/api/auth";
  public apiproperty: string = this.baseUrl+"/rmls/listing";
  public apimapproperty: string = this.baseUrl+"/rmls/listing/map-infowindow";
  public apiallcategory:  string = this.baseUrl_ostio;
  constructor(public http: HttpClient) {
  }
  allcategory(){
    console.log(this.apiallcategory+"?fetchcategory");
    return this.http.get(this.apiallcategory+"?fetchcategory").toPromise();
  }
  fetchProducts(name){
    console.log(this.baseUrl_ostio+"?category_product="+name);
    return this.http.get(this.baseUrl_ostio+"?category_product="+name).toPromise();
  }
  allProducts(){
    console.log(this.baseUrl_ostio+"?allproducts=");
    return this.http.get(this.baseUrl_ostio+"?allproducts=").toPromise();
  }
  orders(){
    console.log(this.baseUrl_ostio+"?orders=");
    return this.http.get(this.baseUrl_ostio+"?orders=").toPromise();
  }
}
