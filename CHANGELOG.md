# Changelog

All notable changes to `atlas` will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed 
 - `atlas-card-flip` now has `overflow: hidden` for the side that isn't showing

## [2.0.0-alpha.12]
### Changed
 - Fixed flicker when Overlay options include `minWidthAnchor` or `minHeightAnchor`
 - Added `shown` and `hidden` outputs to `DialogComponent`

## [2.0.0-alpha.11]
### Changed
 - Overlay now supports `minWidthAnchor` and `minHeightAnchor` properties

## [2.0.0-alpha.10]
### Changed
 - `AutogrowDirective` now has an `enabled` option

## [2.0.0-alpha.9]
### Changed
 - Improved `AutogrowDirective` interface

## [2.0.0-alpha.8]
### Added
 - `atlas-card-flip` component
### Changed
 - Fixed Overlay offset computation when under transformed parent

## [2.0.0-alpha.7]
### Changed
 - Drag/drop only respects left mouse button now
 - Added `EventHelpers.captureMouseGlobal`

## [2.0.0-alpha.6]
### Changed
 - Added `canShow` property to `TooltipComponent`
 - Support string or HTMLElement `anchor` in `Overlay`

## [2.0.0-alpha.5]
### Changed
 - Updated barrel (index) files with newest components

## [2.0.0-alpha.4]
### Changed
 - Proper handling of Escape key during drag/drop operations
 - Animate dragged item back to original position when drop is not successful, or is cancelled
 - Added support for dragging multiple elements

## [2.0.0-alpha.3]
### Changed
 - Upgrade to v2.0.0-rc.12 of [ng-packagr](https://github.com/dherges/ng-packagr) to get [downLevelIteration](https://github.com/dherges/ng-packagr/pull/475) support

## [2.0.0-alpha.2]
### Changed
 - Drag and drop directives and components use mouse events instead of browser drag events.
   This provides more flexibility and improved performance.

## [2.0.0-alpha.1]
### Added
 - Drag and drop components/directives
   - `DragSourceDirective`
   - `DropTargetDirective`
   - `DragDropComponent`
 - `TooltipComponent`

## [2.0.0-alpha.0]
### Added
 - atlas 2.0 components targeting Angular 2+
   - `DialogComponent`
   - `PopupComponent`
   - `TabControlComponent`
   - `DateTimePickerComponent`
 - Various collection utilities, specifically:
   - `FilteredList`
   - `HashList`
   - `HashMap`
   - `HashSet`
   - `OrderedHashSet`
   
