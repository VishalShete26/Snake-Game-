const arr = [1,2,3,4,5];

function MyMap(arr, callback)
{
    let newarr = [];
    for(let i=0; i<arr.length; i++)
    {
        newarr.push(callback(arr[i],i,arr));
    }
    return newarr;
}

let ans = MyMap(arr,function(val){
    return val + 2;
});