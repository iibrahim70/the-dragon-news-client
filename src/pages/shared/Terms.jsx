import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, veniam ad facere consequuntur sunt recusandae eaque, sed maiores debitis cumque labore ipsam incidunt quia doloribus corporis reiciendis quas perferendis quidem nemo, odit nisi placeat. Earum totam accusantium repudiandae facere in aliquam est asperiores dolorem, enim magni non. Quidem, velit.</p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;