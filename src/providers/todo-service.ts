import { Injectable } from '@angular/core';
import { AppSettingsProvider } from './app-settings';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class TodoServiceProvider {

  constructor(public http: Http,public appSettings: AppSettingsProvider) {
    console.log('Hello TodoServiceProvider Provider');
  }
  apiUrl = this.appSettings.getApiUrl();
  
   
   public getTodos() {
    
       return this.http.get(this.apiUrl + 'todos')
       .map((res: Response) => res.json());       
   }
   
  
   public addTodo(newTodo) {
     return this.http.post(this.apiUrl + 'todos', {'text': newTodo})
    .map((res: Response) => res.json());
 
    }
  
   public deleteTodo(todoId) {
     return this.http.delete(this.apiUrl + 'todos/' + todoId)
     .map((res: Response) => res.json());   }
 
}
