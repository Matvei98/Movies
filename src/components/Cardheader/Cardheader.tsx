import React from 'react';
import './index.css';
import {Tag,Space} from 'antd';
import Logo from '../Cardheader/Images/Rectangle.png';
interface Props{
classes?:string;
className?:string;
}

export const Cardheader:React.FC<Props> = ({classes}) => {
return (
<>
<div className='movies'>
<div className='movie'>
<picture>
<img  alt="example" src={Logo}/>
</picture>
<section className='description'>
<h1>The way back</h1>
<p className='text1'>March 5, 2020</p>
<Space size={[0, 8]} wrap>
<Tag>Action</Tag>
<Tag>Drama</Tag>
</Space>
<p className='text2'>A former basketball all-star, who has lost his wife 
and family foundation in a struggle with addiction attempts to regain 
his soul  and salvation by becoming the
 coach of a disparate ethnically mixed high ...</p>
</section>
</div>
<div className='movie'>
<picture>
<img  alt="example" src={Logo}/>
</picture>
<section className='description'>
<h1>The way back</h1>
<p className='text1'>March 5, 2020</p>
  <Space size={[0, 8]} wrap>
  <Tag>Action</Tag>
  <Tag>Drama</Tag>
  </Space>
<p className='text2'>A former basketball all-star, who has lost his wife 
and family foundation in a struggle with addiction attempts to regain 
his soul  and salvation by becoming the
 coach of a disparate ethnically mixed high ...</p>
 </section>
</div>
</div>
</>
)
};



