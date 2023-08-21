import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup ;
  employeeModelObject : EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder: FormBuilder,
    private api : ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      emailId : [''],
      mobileNo : [''],
      salary : ['']
    })
    this.getAllEmployees();
  }

  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

   postEmployeeDetails() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.emailId = this.formValue.value.emailId;
    this.employeeModelObject.mobileNo = this.formValue.value.mobileNo;
    this.employeeModelObject.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelObject)
    .subscribe(res => {
      console.log(res);
      alert("Employee added successfully")
      let ref = document.getElementById('close')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployees();
    },
    err => {
      alert("Something went wrong")
    })
   }

   getAllEmployees() {
    this.api.getEmployee()
    .subscribe(res => {
      this.employeeData = res;
    }) 
   }

   deleteEmployee(row : any) {
    let clickedYes = confirm("Are you sure want to delete");
    if(clickedYes) {
      this.api.deleteEmployee(row.id)
      .subscribe(res => {
      alert("Employee deleted");
      this.getAllEmployees();
    })
    }
   }

   onEdit(row : any) {
    this.employeeModelObject.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['emailId'].setValue(row.emailId);
    this.formValue.controls['mobileNo'].setValue(row.mobileNo);
    this.formValue.controls['salary'].setValue(row.salary);
    this.showUpdate = true;
    this.showAdd = false;
   }

   updateEmployeeDetail() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.emailId = this.formValue.value.emailId;
    this.employeeModelObject.mobileNo = this.formValue.value.mobileNo;
    this.employeeModelObject.salary = this.formValue.value.salary;

    this.api.updateEmployee(this.employeeModelObject, this.employeeModelObject.id)
    .subscribe(res => {
      alert("Employee details updated successfully");
      let ref = document.getElementById('close')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployees();
    })
   }
   
}
