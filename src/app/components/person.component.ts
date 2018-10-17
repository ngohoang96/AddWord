import {Component} from '@angular/core';

@Component({
    selector: 'app-person',
    template : `
            <div>
                <h3>{{name}}</h3>
                <p>Age : {{age}}</p>
                <p *ngIf ="age >= 18">
                ban da du tuoi
                </p>
                <div *ngFor="let thuoctinh of skills; let i = index" >
                    <p class ="text-info"> {{i + 1}}. {{thuoctinh.name}} : {{thuoctinh.grade}}</p>
                </div>
                <button class ="btn btn-success"(click) = "increase();">
                    increase
                </button>
                <button class ="btn btn-warning" (click)= "decrease();">
                    descrease
                </button>
                
                <div style="width: 150px">
                    <br/>
                    <input class="form-control" placeholder ="skill name" [(ngModel)]="txtSkillName"/>
                    <br/>
                    <input type="number" class="form-control" placeholder ="skill grade" [(ngModel)]="txtSkillGrade"/>
                    <br/>
                    <button class ="btn btn-success"(click) = "addSkill();">
                        Add Skill
                    </button>
                </div>
            
            </div>
    `
})


export class PersonComponent{
    name ='teo nguyen';
    age = 16;
    txtSkillName = '';
    txtSkillGrade = 0;
    skills :Skill[] = [
        {name : "hoang" , grade : 9},
        {name : "ly" , grade : 8},
        {name : "ly oc cho" , grade : 3}
    ];
    increase(){
        return this.age++
    }
    decrease(){
        return this.age--
    }
    addSkill(){
        this.skills.push({
            name : this.txtSkillName,
            grade: this.txtSkillGrade,
        })
        this.txtSkillName = '';
        this.txtSkillGrade = 0;
    }
    
}
interface Skill{
    name : String;
    grade: number;

}