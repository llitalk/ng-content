import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildOneComponent } from './app/child-one/child-one.component';

@Component({
  selector: 'app-root',
  imports:[ChildOneComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <p>Projection</p>
    <section>
   <app-child-one>
   <h4 class="title">New Iphone</h4>
   <img  class="img" src="https://media.istockphoto.com/id/1569559602/vector/3d-realistic-high-quality-smartphone-mockup-with-isolated-background-smart-phone-mockup.jpg?s=1024x1024&w=is&k=20&c=-W88FXvwL91fMdpkdjnGZwRpKddg49xuR9zoYhRznmQ="/>
   </app-child-one>

   <app-child-one>
   <h4 class="title">New Smasung</h4>
   <img  class="img" src="https://media.istockphoto.com/id/1569559602/vector/3d-realistic-high-quality-smartphone-mockup-with-isolated-background-smart-phone-mockup.jpg?s=1024x1024&w=is&k=20&c=-W88FXvwL91fMdpkdjnGZwRpKddg49xuR9zoYhRznmQ="/>
   </app-child-one>


   <app-child-one>
   <h4 class="title">New Mac</h4>
   <img  class="img" src="https://media.istockphoto.com/id/1569559602/vector/3d-realistic-high-quality-smartphone-mockup-with-isolated-background-smart-phone-mockup.jpg?s=1024x1024&w=is&k=20&c=-W88FXvwL91fMdpkdjnGZwRpKddg49xuR9zoYhRznmQ="/>
   </app-child-one>
    </section>
  
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
