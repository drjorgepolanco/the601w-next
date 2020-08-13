import { TypeBuilding, TypeCase, TypeMember, TypePost } from './types';

export const ListItem = (props) => {
  const { index, block } = props;
  const { posts_type } = block.attrs;
  const type = posts_type ? posts_type : 'post';

  const isPost     = type === 'post';
  const isMember   = type === 'member';
  const isCase     = type === 'case'
  const isBuilding = type === 'building'
  
  return (
    <li className={ `${type} item-${index}` }>
      { isPost     && <TypePost     { ...props } /> }
      { isMember   && <TypeMember   { ...props } /> }
      { isCase     && <TypeCase     { ...props } /> }
      { isBuilding && <TypeBuilding { ...props } /> }
      
      <style jsx>{`
        li {
          width: 100%;
          padding: 0;
        }
        li.post {
          text-align: center;
        }
        li.member {
          text-align: left;
          padding: 24px 0;
        }
        @media (min-width: 768px) {
          
          li.post {
            float: left;
            width: 33.3333%;
            padding: 0 4px;
          }
        }
        @media (min-width: 1024px) {
          
          li.member {
            float: left;
            width: 33.3333%;
            padding: 16px;
          }
          li.member.item-0 {
            padding-left: 0;
          }
          li.member.item-2 {
            padding-right: 0;
          }
        }
      `}</style>
    </li>
  );
}