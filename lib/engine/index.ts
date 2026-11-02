import {Claim, Source, Chunk} from '@/types'
export type EngineStage = 'Parsing'|'Extracting claims'|'Verifying quotes'|'Detecting conflicts'|'Finding gaps'
export function parseSources(sources:Source[]):Chunk[]{return sources.flatMap(s=>s.text.split(/\n+/).filter(Boolean).map((text,index)=>({id:`${s.id}-runtime-${index}`,text,sourceId:s.id,index})))}
export function verifyQuote(claim:Pick<Claim,'quote'>,chunk:Chunk){return chunk.text.includes(claim.quote)}
export function runEngine(sources:Source[], onStage?:(stage:EngineStage)=>void){for(const stage of ['Parsing','Extracting claims','Verifying quotes','Detecting conflicts','Finding gaps'] as EngineStage[]) onStage?.(stage); return sources}
