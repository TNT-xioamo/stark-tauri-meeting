import { useLocation, useNavigate } from 'react-router-dom'

export function useMenuRoute(index: number) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const pathItems = pathname.split('/')
  const pathItem = pathItems[index] || 'workbench'
  const setPathItem = (newItemKey: string) => {
    const parentPath = pathItems.slice(0, index).join('/')
    navigate( newItemKey.includes('workbench') ? `${parentPath}/` :  `${parentPath}/${newItemKey}`)
  };

  return [pathItem, setPathItem] as const
}
