'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'
import { Tab1 } from '../Tab1'
import { EmptyTab } from '../EmptyTab'

export function SettingTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  const tabItems = [
    { value: 'tab1', title: 'My details' },
    { value: 'tab2', title: 'Profile' },
    { value: 'tab3', title: 'Password' },
    { value: 'tab4', title: 'Team' },
    { value: 'tab5', title: 'Plan' },
    { value: 'tab6', title: 'Billing' },
    { value: 'tab7', title: 'Email' },
    { value: 'tab8', title: 'Notifications' },
    { value: 'tab9', title: 'Integrations' },
    { value: 'tab10', title: 'API' },
  ]

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabItems.map((tab) => (
              <TabItem
                key={tab.value}
                value={tab.value}
                title={tab.title}
                isSelected={currentTab === tab.value}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100 dark:bg-zinc-800"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 dark:bg-zinc-600" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <Tabs.Content value="tab1">
        <Tab1 />
      </Tabs.Content>

      {Array.from({ length: 9 }).map((_, tab) => {
        return (
          <Tabs.Content key={tab + 2} value={`tab${tab + 2}`}>
            <EmptyTab />
          </Tabs.Content>
        )
      })}
    </Tabs.Root>
  )
}
