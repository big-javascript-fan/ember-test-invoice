import { helper } from '@ember/component/helper';

export function sum(params/*, hash*/) {
  let sum = 0;
  params.forEach(param=>{
      sum+=param;
  });
  return sum;
}

export default helper(sum);
