import Container from "./ui/Container";
import Section from "./ui/Section";

export default function Solution() {
  return (
    <Section className="relative overflow-hidden bg-white border-b border-neutral-200">
      <Container size="large">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-sm font-mono text-emerald-600 mb-6">
            THE SOLUTION
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-neutral-900">
                IQgent One
                <br />
                <span className="gradient-text">researches, then writes</span>
              </h2>
              
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                An agentic research engine that analyzes company websites, public signals, 
                and structured data to generate opening lines that sound like you did the homework.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Deep company research</h3>
                    <p className="text-neutral-600">Analyzes websites, news, and public signals automatically</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Executive-level quality</h3>
                    <p className="text-neutral-600">Opening lines that feel researched, not templated</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Works on your data</h3>
                    <p className="text-neutral-600">Row-by-row processing of CSVs and lead lists</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="p-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">Lead List Input</div>
                      <div className="text-xs text-neutral-500">company_leads.csv</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-neutral-200">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm text-neutral-600">Researching Acme Corp...</span>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="text-xs font-mono text-emerald-700 mb-2">Generated opening line:</div>
                      <p className="text-sm text-neutral-900 italic">
                        "Noticed your recent Series B announcement. Your focus on enterprise automation 
                        aligns perfectly with..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
