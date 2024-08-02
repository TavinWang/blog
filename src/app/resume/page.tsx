import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { color: '#282935', media: '(prefers-color-scheme: light)' },
    { color: '#282935', media: '(prefers-color-scheme: dark)' },
  ],
}

export default function Page() {
  const lastBuildTime = formatDateTime(
    {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      weekday: 'short',
    },
    new Date(),
  )

  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            Wang Jiatao@MacBook-Air:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on ttys003</p>
          <Typed>
            <TypedText>Who am I</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>Wang Jiatao</strong>, in Chinese my name is{' '}
                <strong>王嘉涛</strong>.
              </p>
              <p>
                I am an undergraduate majoring in <strong>DS&BA</strong>, focusing on
                machine learning and artificial intelligence algorithms.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>Educational Experience</span>
                <span>Projects</span>
                <span>Blog-info</span>
                <span>Competition</span>
                <span>Skills</span>
                <span>Contact</span>
              </div>
            </TypedContent>
            <TypedText afterDelay={700}>Educational Experience</TypedText>
            <TypedContent>
              <p>
                <i>2021.09-</i>&emsp;<strong>Central South University</strong>
              </p>
              <p>
                In my undergraduate study, my research direction was data science and business analysis.
                Moreover, my major ranking is <strong>6/30</strong> with a weighted average score of <strong>91+</strong>.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>Projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/TavinWang/Machine-Learning'>
                      Machine-Learning
                    </a>
                  </strong>
                </li>
                <li>A practical project of machine learning algorithm implementation.</li>
              </ul>
            </TypedContent>
            <TypedText>Blog-info</TypedText>
            <TypedContent>
              <p>
                I am keen on sharing knowledge as well as writing articles and
                tutorials regularly, covering <code>Python</code>,
                <code>Matlab</code>, <code>Java</code>,
                <code>Sql</code>, and <code>Tableau</code>.
              </p>
              <p>
                My articles have been read over <i>10,000</i> times.
                Previously, I primarily wrote in Chinese, but currently, my goal
                is to write articles in English.
              </p>
            </TypedContent>
            <TypedText>Competition</TypedText>
            <TypedContent>
              <p>
                Asia and Pacific Mathematical Contest in Modeling———the first prize
              </p>
              <p>
                National College Student Business Negotiation Competition———the secone prize
              </p>
              <p>
                National English Competition for College Students———the third prize
              </p>
            </TypedContent>
            <TypedText>Skills</TypedText>
            <TypedContent>
              <p>
                I excel in <code>Python</code> and <code>Matlab</code>,
                proficiently utilizing <code>Sql</code> to perform various operations on data.
              </p>
              <p>
                I have a deep understanding of <strong>DS</strong> and have
                explored much algorithm. Currently, my work
                primarily involves applying algorithms to the business to discover insights.
              </p>
              <p>
                In addition to <strong>BA</strong>, I am also familiar with
                <code>Tableau</code> and <code>Excel</code>.
              </p>
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className='my-4 flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Social</p>
                <div className='grid flex-1 grid-cols-2 justify-items-start gap-2'>
                  <a href='https://github.com/TavinWang'>Github</a>
                  <a href='https://juejin.cn/user/2203888091411038'>掘金</a>
                  <a href='https://medium.com/@tavin.wang'>Medium</a>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='basis-1/4 text-center font-semibold'>Email</p>
                <a href='mailto:wjt@163.com'>wjt@163.com</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
