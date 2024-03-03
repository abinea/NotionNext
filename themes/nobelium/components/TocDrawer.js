import { useGitBookGlobal } from '@/themes/gitbook'
import Catalog from './Catalog'

/**
 * 悬浮抽屉目录
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const TocDrawer = ({ post, cRef }) => {
  return <>
    <div id='gitbook-toc-float' className='fixed top-0 right-0 z-40 max-xl:hidden'>
      {/* 侧边菜单 */}
      <div
        className='animate__slideInRight overflow-y-hidden w-60 duration-200 fixed right-1 top-1/4 rounded py-2 bg-white dark:bg-hexo-black-gray'>
        {post && <>
          <div className='dark:text-gray-400 text-gray-600 h-96 p-3'>
            <Catalog post={post} />
          </div>
        </>}
      </div>
    </div>
  </>
}
export default TocDrawer
