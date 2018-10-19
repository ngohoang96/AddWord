export function countReducer(state=1,action) {
    if(action.type==='INCREASE' ) return state + 1;
    if(action.type==='DECREASE' ) return state - 1;
    if(action.type==='RESET' ) return 1;
    return state;
}
/* 
    cach su dung store
    dinh nghia ra store
    lay du lieu tu store va hien thi
    thay doi du lieu tu store
    action la menh lenh
    import storemodule
    storemodule.forRoot({count <= gia tri tra ve : countReducer function tra ra state moi})


*/