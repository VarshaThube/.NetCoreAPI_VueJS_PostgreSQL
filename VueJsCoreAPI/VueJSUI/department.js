const department={template:`

<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Department
</button>

</div>    

<table class="table table-striped">
    <thead>
        <tr>
            <th>
                <div class="d-flex flex-row">

                <input class="form-control m-2"
                    v-model="DepartmentIdFilter"
                    v-on:keyup="FilterFn()"
                    placeholder="Filter">

                   <button type="button" class="btn btn-light" 
                    @click="sortResult('DepartmentId',true)">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg> 

                    </button>

                    <button type="button" class="btn btn-light" 
                    @click="sortResult('DepartmentId',false)">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>

                    </button>

                </div>

                DepartmentId
            </th>
            <th>

            <div class="d-flex flex-row">

                <input class="form-control m-2"
                    v-model="DepartmentNameFilter"
                    v-on:keyup="FilterFn()"
                    placeholder="Filter">

                    <button type="button" class="btn btn-light" 
                    @click="sortResult('DepartmentName',true)">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg> 

                    </button>

                    <button type="button" class="btn btn-light" 
                    @click="sortResult('DepartmentName',false)">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>

                    </button>
                </div>

                DepartmentName
            </th>
            <th>
                Options
            </th>
        </tr>
    </thead>    
        <tbody>
            <tr v-for="dep in departments">
                <td>{{dep.DepartmentId}}</td>
                <td>{{dep.DepartmentName}}</td>
                <td>
                    <button type="button" 
                    class="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="editClick(dep)">  

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>

                    <button type="button" @click="deleteClick(dep.DepartmentId)"
                    class="btn btn-light mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                </td>
            </tr>
        </tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-lebal="Close"></button>
        </div>

        <div class="modal-body">

            <div class="input-group mb-3">
                <span class="input-group-text">Department Name</span>
                <input type="text" class="form-control" v-model="DepartmentName">
            </div>


            <button type="button" @click="createClick()"
            v-if="DepartmentId==0" class="btn btn-primary">
            Create
            </button>


            <button type="button" @click="updateClick()"
            v-if="DepartmentId!=0" class="btn btn-primary">
            Update
            </button>
        </div>    
    </div>
</div>
</div>

`,

data() {
    return {
        departments:[],
        modalTitle:"",
        DepartmentName:"",
        DepartmentId:0,
        DepartmentNameFilter:"",
        DepartmentIdFilter:"",
        departmentsWithoutFilter:[]
    }
},

methods:{
    refreshData() {
        axios.get(variables.API_URL+"department")
        .then((response)=>{
            this.departments=response.data;
            this.departmentsWithoutFilter=response.data;
        });
    },
    addClick() {
        this.modalTitle="Add Department";
        this.DepartmentId=0;
        this.DepartmentName="";
    },
    editClick(dep) {
        this.modalTitle="Edit Department";
        this.DepartmentId=dep.DepartmentId;
        this.DepartmentName=dep.DepartmentName;
    },
    createClick() {
        axios.post(variables.API_URL+"department", {
            DepartmentName:this.DepartmentName
        })
        .then((response)=>{
            alert(response.data);
            this.refreshData();
            
        });
    },
    updateClick() {
        axios.put(variables.API_URL+"department", {
            DepartmentId:this.DepartmentId,
            DepartmentName:this.DepartmentName
        })
        .then((response)=>{
            alert(response.data);
            this.refreshData();
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"department/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    FilterFn(){
        var DepartmentIdFilter=this.DepartmentIdFilter;
        var DepartmentNameFilter=this.DepartmentNameFilter;

        this.departments=this.departmentsWithoutFilter.filter(
            function(el){
                return el.DepartmentId.toString().toLowerCase().includes(
                    DepartmentIdFilter.toString().trim().toLowerCase()
                )&&
                el.DepartmentName.toString().toLowerCase().includes(
                    DepartmentNameFilter.toString().trim().toLowerCase()
                )
            });
    },
    sortResult(prop, asc){
        this.departments=this.departmentsWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop]) ? 1: ((a[prop] <b[prop]) ? -1 : 0);
            }
            else{
                return (b[prop]>a[prop]) ? 1: ((b[prop] <a[prop]) ? -1 : 0);
            }
        })
    }
},

mounted:function() {
    this.refreshData();
}

}