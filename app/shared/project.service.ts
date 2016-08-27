import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  private projectsUrl = 'app/projects';  // URL to web api

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsUrl)
               .toPromise()
               .then(response => response.json().data as Project[])
               .catch(this.handleError);
  }

  save(project: Project): Promise<Project>  {
    return this.post(project);
  }

  // Add new Project
  private post(project: Project): Promise<Project> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.projectsUrl, JSON.stringify(project), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
