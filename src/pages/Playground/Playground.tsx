import {
  Braces,
  Calculator,
  CheckCircle2,
  Copy,
  KeyRound,
  Palette,
  RefreshCw,
  Regex,
  Sparkles,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
} from '../../components/ui'

const tools = [
  {
    id: 'password',
    label: 'Password Generator',
    description: 'Generate secure passwords with customizable options.',
    icon: KeyRound,
  },
  {
    id: 'json',
    label: 'JSON Formatter',
    description: 'Format and validate JSON data instantly.',
    icon: Braces,
  },
  {
    id: 'regex',
    label: 'Regex Tester',
    description: 'Test regular expressions against sample text.',
    icon: Regex,
  },
  {
    id: 'gradient',
    label: 'Gradient Generator',
    description: 'Build and copy CSS gradient backgrounds.',
    icon: Palette,
  },
  {
    id: 'calculator',
    label: 'Calculator',
    description: 'Perform basic arithmetic calculations.',
    icon: Calculator,
  },
] as const

type ToolId = (typeof tools)[number]['id']

const calculatorKeys = [
  '7',
  '8',
  '9',
  '/',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '-',
  '0',
  '.',
  '=',
  '+',
]

function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
) {
  let characters = 'abcdefghijklmnopqrstuvwxyz'

  if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (includeNumbers) {
    characters += '0123456789'
  }

  if (includeSymbols) {
    characters += '!@#$%^&*()_+-=[]{}'
  }

  return Array.from({ length }, () => {
    const index = Math.floor(Math.random() * characters.length)
    return characters[index]
  }).join('')
}

export default function Playground() {
  const [activeTool, setActiveTool] = useState<ToolId>('password')
  const [copiedValue, setCopiedValue] = useState('')

  const [passwordLength, setPasswordLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState(() =>
    generatePassword(16, true, true, true),
  )

  const [jsonInput, setJsonInput] = useState(
    '{"name":"Francis","role":"Full Stack Web Developer"}',
  )
  const [jsonOutput, setJsonOutput] = useState('')
  const [jsonError, setJsonError] = useState('')

  const [regexPattern, setRegexPattern] = useState('\\bReact\\b')
  const [regexText, setRegexText] = useState(
    'React, TypeScript, Laravel, and React Router.',
  )
  const [regexFlags, setRegexFlags] = useState('gi')

  const [gradientStart, setGradientStart] = useState('#8b5cf6')
  const [gradientEnd, setGradientEnd] = useState('#a855f7')
  const [gradientAngle, setGradientAngle] = useState(135)

  const [calculatorExpression, setCalculatorExpression] = useState('')
  const [calculatorError, setCalculatorError] = useState('')

  const regexMatches = useMemo(() => {
    try {
      const expression = new RegExp(regexPattern, regexFlags)
      return Array.from(regexText.matchAll(expression)).map(
        (match) => match[0],
      )
    } catch {
      return []
    }
  }, [regexFlags, regexPattern, regexText])

  const gradientValue = `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`

  async function copyValue(value: string, key: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(key)

      window.setTimeout(() => {
        setCopiedValue('')
      }, 1800)
    } catch {
      setCopiedValue('')
    }
  }

  function regeneratePassword() {
    setPassword(
      generatePassword(
        passwordLength,
        includeUppercase,
        includeNumbers,
        includeSymbols,
      ),
    )
  }

  function formatJson() {
    try {
      const parsed = JSON.parse(jsonInput)
      setJsonOutput(JSON.stringify(parsed, null, 2))
      setJsonError('')
    } catch {
      setJsonOutput('')
      setJsonError('Invalid JSON. Check commas, quotes, and brackets.')
    }
  }

  function minifyJson() {
    try {
      const parsed = JSON.parse(jsonInput)
      setJsonOutput(JSON.stringify(parsed))
      setJsonError('')
    } catch {
      setJsonOutput('')
      setJsonError('Invalid JSON. Check commas, quotes, and brackets.')
    }
  }

  function calculate() {
    try {
      if (!/^[0-9+\-*/().\s]+$/.test(calculatorExpression)) {
        throw new Error('Invalid expression')
      }

      const result = Function(
        `"use strict"; return (${calculatorExpression})`,
      )()

      if (typeof result !== 'number' || !Number.isFinite(result)) {
        throw new Error('Invalid result')
      }

      setCalculatorExpression(String(result))
      setCalculatorError('')
    } catch {
      setCalculatorError('Invalid calculation.')
    }
  }

  function handleCalculatorKey(key: string) {
    if (key === '=') {
      calculate()
      return
    }

    setCalculatorError('')
    setCalculatorExpression((current) => current + key)
  }

  const activeToolDetails =
    tools.find((tool) => tool.id === activeTool) ?? tools[0]

  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="absolute -left-40 top-16 h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-[150px]" />
          <div className="absolute right-0 top-20 h-[460px] w-[460px] rounded-full bg-purple-500/15 blur-[160px]" />
        </div>

        <Container className="relative">
          <Badge variant="purple">Developer Playground</Badge>

          <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl lg:leading-[1.02] tracking-[-0.055em] text-white">
            Small tools built for
            <GradientText> developers.</GradientText>
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
            A collection of interactive utilities demonstrating React state,
            TypeScript logic, browser APIs, validation, and interface design.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {tools.map(({ id, label, description, icon: Icon }) => {
              const isActive = activeTool === id

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTool(id)}
                  className={
                    isActive
                      ? 'rounded-2xl border border-violet-400/35 bg-violet-500/15 p-5 text-left shadow-[0_18px_55px_rgba(139,92,246,0.14)]'
                      : 'rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.045]'
                  }
                >
                  <Icon
                    size={22}
                    className={
                      isActive ? 'text-violet-300' : 'text-slate-600'
                    }
                  />

                  <p
                    className={
                      isActive
                        ? 'mt-4 text-sm font-semibold text-white'
                        : 'mt-4 text-sm font-semibold text-slate-400'
                    }
                  >
                    {label}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {description}
                  </p>
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8">
            <GlassCard className="p-7">
              <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                <activeToolDetails.icon size={24} />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                Active Tool
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                {activeToolDetails.label}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {activeToolDetails.description}
              </p>

              <div className="mt-7 space-y-3">
                {tools.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTool(id)}
                    className={
                      activeTool === id
                        ? 'flex w-full items-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-white'
                        : 'flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm text-slate-500 transition hover:border-violet-400/20 hover:text-slate-300'
                    }
                  >
                    <Icon size={17} />
                    {label}
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="min-h-[500px] p-5 sm:p-6 lg:min-h-[620px] lg:p-8">
              {activeTool === 'password' && (
                <div>
                  <SectionHeading
                    eyebrow="Security Utility"
                    title="Password Generator"
                    description="Create a randomized password using your preferred length and character options."
                  />

                  <div className="mt-9 rounded-2xl border border-violet-400/15 bg-violet-500/[0.06] p-5">
                    <div className="flex items-center justify-between gap-5">
                      <code className="break-all text-lg font-semibold text-violet-200">
                        {password}
                      </code>

                      <button
                        type="button"
                        onClick={() =>
                          copyValue(password, 'password')
                        }
                        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-xs font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                      >
                        {copiedValue === 'password' ? (
                          <CheckCircle2 size={15} />
                        ) : (
                          <Copy size={15} />
                        )}
                        {copiedValue === 'password'
                          ? 'Copied'
                          : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password-length"
                        className="text-sm text-slate-400"
                      >
                        Password length
                      </label>

                      <span className="text-sm font-semibold text-violet-300">
                        {passwordLength}
                      </span>
                    </div>

                    <input
                      id="password-length"
                      type="range"
                      min="8"
                      max="40"
                      value={passwordLength}
                      onChange={(event) =>
                        setPasswordLength(Number(event.target.value))
                      }
                      className="mt-4 w-full accent-violet-500"
                    />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      {
                        label: 'Uppercase',
                        checked: includeUppercase,
                        onChange: setIncludeUppercase,
                      },
                      {
                        label: 'Numbers',
                        checked: includeNumbers,
                        onChange: setIncludeNumbers,
                      },
                      {
                        label: 'Symbols',
                        checked: includeSymbols,
                        onChange: setIncludeSymbols,
                      },
                    ].map((option) => (
                      <label
                        key={option.label}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4"
                      >
                        <input
                          type="checkbox"
                          checked={option.checked}
                          onChange={(event) =>
                            option.onChange(event.target.checked)
                          }
                          className="accent-violet-500"
                        />

                        <span className="text-sm text-slate-400">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={regeneratePassword}
                    className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    <RefreshCw size={17} />
                    Generate Password
                  </button>
                </div>
              )}

              {activeTool === 'json' && (
                <div>
                  <SectionHeading
                    eyebrow="Data Utility"
                    title="JSON Formatter"
                    description="Paste JSON data, validate its syntax, and convert it into readable or compact formatting."
                  />

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        JSON Input
                      </span>

                      <textarea
                        value={jsonInput}
                        onChange={(event) =>
                          setJsonInput(event.target.value)
                        }
                        rows={15}
                        spellCheck={false}
                        className="w-full resize-none rounded-2xl border border-white/10 bg-[#080b18] p-5 font-mono text-sm leading-7 text-slate-300 outline-none transition focus:border-violet-400/50"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        Output
                      </span>

                      <textarea
                        value={jsonOutput}
                        readOnly
                        rows={15}
                        placeholder="Formatted JSON will appear here."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-[#080b18] p-5 font-mono text-sm leading-7 text-violet-200 outline-none placeholder:text-slate-800"
                      />
                    </label>
                  </div>

                  {jsonError && (
                    <p className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {jsonError}
                    </p>
                  )}

                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={formatJson}
                      className="h-11 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-500"
                    >
                      Format JSON
                    </button>

                    <button
                      type="button"
                      onClick={minifyJson}
                      className="h-11 rounded-xl border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                    >
                      Minify
                    </button>

                    {jsonOutput && (
                      <button
                        type="button"
                        onClick={() =>
                          copyValue(jsonOutput, 'json')
                        }
                        className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 px-5 text-sm font-semibold text-slate-400 transition hover:border-violet-400/35 hover:text-white"
                      >
                        <Copy size={15} />
                        {copiedValue === 'json'
                          ? 'Copied'
                          : 'Copy Output'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {activeTool === 'regex' && (
                <div>
                  <SectionHeading
                    eyebrow="Text Utility"
                    title="Regex Tester"
                    description="Enter a regular expression and test it against sample text."
                  />

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_0.22fr]">
                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        Pattern
                      </span>

                      <input
                        value={regexPattern}
                        onChange={(event) =>
                          setRegexPattern(event.target.value)
                        }
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 font-mono text-sm text-white outline-none transition focus:border-violet-400/50"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        Flags
                      </span>

                      <input
                        value={regexFlags}
                        onChange={(event) =>
                          setRegexFlags(event.target.value)
                        }
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 font-mono text-sm text-white outline-none transition focus:border-violet-400/50"
                      />
                    </label>
                  </div>

                  <label className="mt-6 block space-y-3">
                    <span className="text-sm text-slate-400">
                      Test Text
                    </span>

                    <textarea
                      value={regexText}
                      onChange={(event) =>
                        setRegexText(event.target.value)
                      }
                      rows={10}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-[#080b18] p-5 text-sm leading-7 text-slate-300 outline-none transition focus:border-violet-400/50"
                    />
                  </label>

                  <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-400">
                      Matches Found
                    </p>

                    <p className="mt-3 text-3xl font-bold text-white">
                      {regexMatches.length}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {regexMatches.length > 0 ? (
                        regexMatches.map((match, index) => (
                          <Badge
                            key={`${match}-${index}`}
                            variant="purple"
                          >
                            {match}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-slate-600">
                          No matches found.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'gradient' && (
                <div>
                  <SectionHeading
                    eyebrow="Design Utility"
                    title="Gradient Generator"
                    description="Choose two colors and an angle to create a CSS linear gradient."
                  />

                  <div
                    className="mt-8 h-64 rounded-3xl border border-white/10"
                    style={{ background: gradientValue }}
                  />

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        Start Color
                      </span>

                      <input
                        type="color"
                        value={gradientStart}
                        onChange={(event) =>
                          setGradientStart(event.target.value)
                        }
                        className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-white/[0.035] p-2"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        End Color
                      </span>

                      <input
                        type="color"
                        value={gradientEnd}
                        onChange={(event) =>
                          setGradientEnd(event.target.value)
                        }
                        className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-white/[0.035] p-2"
                      />
                    </label>

                    <label className="space-y-3">
                      <span className="text-sm text-slate-400">
                        Angle: {gradientAngle}°
                      </span>

                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={gradientAngle}
                        onChange={(event) =>
                          setGradientAngle(
                            Number(event.target.value),
                          )
                        }
                        className="mt-4 w-full accent-violet-500"
                      />
                    </label>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-[#080b18] p-5">
                    <code className="text-sm text-violet-200">
                      background: {gradientValue};
                    </code>

                    <button
                      type="button"
                      onClick={() =>
                        copyValue(
                          `background: ${gradientValue};`,
                          'gradient',
                        )
                      }
                      className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-xs font-semibold text-slate-300"
                    >
                      <Copy size={15} />
                      {copiedValue === 'gradient'
                        ? 'Copied'
                        : 'Copy CSS'}
                    </button>
                  </div>
                </div>
              )}

              {activeTool === 'calculator' && (
                <div>
                  <SectionHeading
                    eyebrow="Math Utility"
                    title="Calculator"
                    description="Perform basic arithmetic using the keypad or keyboard input."
                  />

                  <div className="mx-auto mt-9 max-w-md rounded-3xl border border-white/[0.08] bg-[#080b18] p-6">
                    <input
                      value={calculatorExpression}
                      onChange={(event) => {
                        setCalculatorError('')
                        setCalculatorExpression(event.target.value)
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          calculate()
                        }
                      }}
                      placeholder="0"
                      className="h-20 w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 text-right text-3xl font-semibold text-white outline-none placeholder:text-slate-800 focus:border-violet-400/40"
                    />

                    {calculatorError && (
                      <p className="mt-3 text-sm text-red-300">
                        {calculatorError}
                      </p>
                    )}

                    <div className="mt-5 grid grid-cols-4 gap-3">
                      {calculatorKeys.map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleCalculatorKey(key)}
                          className={
                            key === '='
                              ? 'h-14 rounded-xl bg-violet-600 text-lg font-semibold text-white transition hover:bg-violet-500'
                              : ['/', '*', '-', '+'].includes(key)
                                ? 'h-14 rounded-xl border border-violet-400/20 bg-violet-500/10 text-lg font-semibold text-violet-300 transition hover:bg-violet-500/20'
                                : 'h-14 rounded-xl border border-white/[0.08] bg-white/[0.035] text-lg font-semibold text-slate-300 transition hover:border-violet-400/25 hover:text-white'
                          }
                        >
                          {key}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setCalculatorExpression('')
                        setCalculatorError('')
                      }}
                      className="mt-3 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] text-sm font-semibold text-slate-500 transition hover:text-white"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Built With React"
            title="Small utilities. Practical frontend skills."
            description="These tools demonstrate component state, derived values, form handling, browser APIs, validation, TypeScript, and reusable interface patterns."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {[
              'React State Management',
              'TypeScript Type Safety',
              'Browser Clipboard API',
              'Input Validation',
            ].map((item) => (
              <GlassCard
                key={item}
                hoverable
                className="p-6 text-center"
              >
                <Sparkles
                  size={21}
                  className="mx-auto text-violet-300"
                />

                <p className="mt-5 text-sm font-semibold text-white">
                  {item}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}