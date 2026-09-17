class Solution {

    productExceptSelf(nums: number[]): number[] {
        let leftProduct = [1];

        for (let i =1 ; i <nums.length ; i ++) {
            const n : number = leftProduct[i-1]*nums[i-1];
            leftProduct.push(n)
        }


        let rightProduct = []

        rightProduct [nums.length -1]= 1

        for (let i = nums.length-2 ; i >= 0 ; i -- ) {
            rightProduct[i] = rightProduct[i + 1] * nums[i + 1]
        }

        let result : number [] =[] ;

        for (let i =0 ; i <nums.length ; i ++) {
            const n = leftProduct[i]*rightProduct[i]
            result.push(n)
        }

        return result
    }
}