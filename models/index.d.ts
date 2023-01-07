import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMerch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Merch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly merchName?: string | null;
  readonly merchPrice?: number | null;
  readonly merchQuantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMerch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Merch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly merchName?: string | null;
  readonly merchPrice?: number | null;
  readonly merchQuantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Merch = LazyLoading extends LazyLoadingDisabled ? EagerMerch : LazyMerch

export declare const Merch: (new (init: ModelInit<Merch>) => Merch) & {
  copyOf(source: Merch, mutator: (draft: MutableModel<Merch>) => MutableModel<Merch> | void): Merch;
}