import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs'
import Code from './Code'

const DocumentationTabs: FC = () => {
 return <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
    <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
    </TabsList>
    <TabsContent value='nodejs'></TabsContent>
    <TabsContent value='python'></TabsContent>
    {/*<SimpleBar></SimpleBar> */}
    <Code />
    
 </Tabs>
}

export default DocumentationTabs