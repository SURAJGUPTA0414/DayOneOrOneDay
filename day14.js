console.log('day14 started');

//1
// Intersection of two arrays
var intersection = function (nums1, nums2) {

    let x1 = [... new Set(nums1)]

    let x2 = [... new Set(nums2)]

    let x = [...x1, ...x2];

    let ff = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a))

    let hh = [...new Set(ff)]
   return hh
};



console.log('day 14 ended');