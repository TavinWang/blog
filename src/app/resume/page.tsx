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
            About Me
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>Last login: {lastBuildTime} on ttys003</p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>WANG Jiatao</strong>, in Chinese my name is{' '}
                <strong>王嘉涛</strong>.
              </p>
              <p>
                I am a undergraduate student majoring in <strong>Data Science and Business Analytics</strong>
                at Central South University, focusing on
                focusing on the frontiers of machine learning and big data by <code>Python</code>.
              </p>
              <p>
                I have amassed substantial practical experience in the{' '}
                <strong>DS</strong>.
              </p>
            {/* </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                <span>opensource</span>
                <span>projects</span>
                <span>blog-info</span>
                <span>experience</span>
                <span>skills</span>
                <span>contact</span>
              </div>
            </TypedContent> */}
            {/* <TypedText afterDelay={700}>opensource</TypedText>
            <TypedContent>
              <p>
                I am passionate about contributing to the open-source community,
                having made multiple contributions to well-known projects such
                as <code>Ant Design</code>.
              </p>
              <p>
                Additionally, I have developed and maintained lots of
                open-source projects, which have been successfully published on
                npm and collectively garnered nearly <i>20,000</i> downloads.
              </p>
            </TypedContent> */}
            <TypedText afterDelay={1000}>projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/TavinWang/Machine-Learning'>
                      react-markdown-toc
                    </a>
                  </strong>
                </li>
                <li>Machine learning in action.</li>
              </ul>
              {/* <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/from-to'>
                      from-to.js
                    </a>
                  </strong>
                </li>
                <li>Transitioning from one value to another.</li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/react-server-only-context'>
                      react-server-only-context
                    </a>
                  </strong>
                </li>
                <li>
                  A straightforward alternative for using context within React
                  Server Components.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/tw-styled'>
                      tw-styled
                    </a>
                  </strong>
                </li>
                <li>
                  Create Tailwind CSS-styled React components with ease using
                  tw-styled.
                </li>
              </ul>
              <ul>
                <li>
                  <strong>
                    <a href='https://github.com/zhangyu1818/use-flip'>
                      use-flip
                    </a>
                  </strong>
                </li>
                <li>
                  Effortless FLIP animations with a React Hook for smoother
                  transitions.
                </li>
              </ul> */}
            </TypedContent>
            <TypedText>blog-info</TypedText>
            <TypedContent>
              <p>
                I am keen on sharing knowledge as well as writing articles and
                tutorials regularly, covering <code>Python</code>,
                <code>Java</code>, <code>MATLAB</code>,
                and <code>Sql</code>.
              </p>
              <p>
                {/* My articles have been read over <i>150,000</i> times. */}
                Previously, I primarily wrote in Chinese, but currently, my goal
                is to write articles in English.
              </p>
            </TypedContent>
            <TypedText>experience</TypedText>
            <TypedContent>
              <p><i>2021-2025</i><strong>Central South University</strong></p>
              <p>
                I studied in the Business School of Central South University as an undergraduate, 
                majoring in information management and information systems, 
                and my research direction is data science and business analysis
              </p>
            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I excel in <code>Python</code> and <code>MATLAB</code>,
                proficiently utilizing <code>Sql</code> for various data operations.
              </p>
              <p>
                In terms of data analysis, I am proficient in <code>Excel</code> and <code>Tableau</code>, 
                using them for data visualization and descriptive statistics
              </p>
              <p>
                In addition to machine learning, I am also familiar with
                algorithm such as decision trees, SVM, neural networks, and logistic regression.
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
