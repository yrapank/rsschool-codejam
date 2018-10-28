 const sumOfOther = function(arr){
  let ans =[];
  for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let j =0; j<arr.length; j++){
      sum+=arr[j]
    }
    sum-=arr[i];
    ans.push(sum);
  }
  return ans
}   
console.log(sumOfOther([2, 3, 4, 1]));