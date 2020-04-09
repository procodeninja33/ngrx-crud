import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/models/response.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) { }

    URL: any = environment.URL;

    /** Get All Employeed */
    getAllEmployees(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(`${this.URL}/employee/getAll`);
    }
}