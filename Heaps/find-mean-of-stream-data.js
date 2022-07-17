
/*
 * Implement two methods add_int() and get_mean()
 * add_int: This method adds an int to the collection, later this collection will be used to compute the mean
 * get_mean: This method should return the mean for a set of integers, that we added to the collection

 * Note: getMean can be called at any point in the time
 * https://docs.google.com/document/d/1icGplnWxYjgNJGzOAjbAIcLUr-yWFGjHCu2WQMJjI74
*/
q1 = max-heap()
q2 = min-heap()

function add_int(num) {
  if (q1.empty() || q1.top() > num) {
    q1.add(num)
  } else {
    q2.add(num)
  }

  if (q1.size() > q2.size() + 1) {
    q2.add(q1.top())
    q1.pop()
  } else if (q2.size() > q1.size() + 1) {
    q1.add(q2.top())
    q2.pop()
  }
}

function get_mean() {

  // there are three case to
  // case 1: both the heap sizes are same
  // case 2: left heap size greater then right heap size
  // case 3: right heap size greater then left heap size

  if (q1.size() == q2.size()) {
    return (q1.top() + q2.top()) / 2
  } else if (q1.size() > q2.size()) {
    return q1.top()
  } else {
    return q2.top()
  }
}
