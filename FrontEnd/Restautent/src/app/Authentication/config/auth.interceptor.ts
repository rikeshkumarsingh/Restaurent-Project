import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
@Injectable()
export class Authinterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     let newReq = req;
    //     let token = this.loginService.getToken();
    
    //     if (token != null) {
    //         // Set the header key to 'authorization' (lowercase) and use the token value
    //         newReq = newReq.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
    //         console.log('Token:', token);
    //         console.log('Headers:', newReq.headers.keys());
    //     }
    
    //     // console.log("from Interceptor", newReq);
    //     return next.handle(newReq);
    // }
    
    
    // intercept(
    //     request: HttpRequest<any>,
    //     next: HttpHandler
    //   ): Observable<HttpEvent<any>> {
    //     const token = localStorage.getItem('token');
    
    //     if (token) {
    //       request = request.clone({
    //         setHeaders: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //     }
    
    //     return next.handle(request);
    //   }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');   
    
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });  
         
        }
    
        return next.handle(request);
      }
} 

