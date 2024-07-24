/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;
function Brush() {

var my_constant = 'MB_OK MAX_SEMA_LIMIT SDL_INIT_VIDEO MAX_SEMA_COUNT SDL_SWSURFACE NotificationEvent DDDK MAX_THREAD SYM_NAME DEV_NAME WdfDeviceIoDirect WdfDeviceIoNeither False True IRP_MJ_PNP LowPagePriority DO_DIRECT_IO WDF_NO_OBJECT_ATTRIBUTES IRP_MN_REMOVE_DEVICE IO_NO_INCREMENT STATUS_SUCCESS GENERIC_READ GENERIC_WRITE WDF_NO_HANDLE METHOD_BUFFERED IRP_MJ_DEVICE_CONTROL WdfDeviceIoBuffered WdfIoQueueDispatchSequential STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ STATUS_CANCELLED FILE_FLAG_OVERLAPPED DISPATCH_LEVEL KernelMode OPEN_EXISTING FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING';

var my_keyword =  'numeric_std to_integer process rol ror use ieee port architecture others std_logic_unsigned out std_logic_1164 entity initial module parameter wire assign always endmodule posedge CLK_DIV_PERIOD abs addr and exit stdcall external array Nil as asm begin cardinal case class comp const constructor destructor div do downto else end except exports extended false file include includelib extern push call ret option finalization finally for function goto if implementation in inherited initialization interface is label library mod nil not object of on or packed pointer private procedure program property pvariant protected public published raise record repeat set shl shr then threadvar to true try type unit until uses val var varirnt while with write writeln xor';

var my_type = 'sdl sdl_gfx app PSDL_Surface TForm Dialogs Windows Messages SysUtils Variants Classes Graphics Controls Forms KSEMAPHORE TForm1 KMUTEX KEVENT KeSetEvent KeInitializeEvent reg constant range WDFTIMER PPMDL signal bit bit_vector std_logic unsigned PMDL WDFMEMORY WDFREQUEST WDF_TIMER_CONFIG WDF_OBJECT_ATTRIBUTES WDFFILEOBJECT input output void PWDF_FILEOBJECT_CONFIG WDFQUEUE PFN_WDF_DEVICE_FILE_CREATE PFN_WDF_FILE_CLOSE PFN_WDF_FILE_CLEANUP WDF_FILEOBJECT_CONFIG WDF_IO_QUEUE_CONFIG WDFFUNC WDFDRIVER PWDFDEVICE_INIT WDFDEVICE PWDF_DRIVER_GLOBALS PLIST_ENTRY WDF_DRIVER_CONFIG PPointer TKDpc PIrp ansichar ansistring Handle boolean byte Integer char Pointer PDriverObject PUnicodeString double currency dword TUnicodeString ULONG PIoStackLocation PChar PDeviceObject dd db PIRP _IRP IO_STACK_LOCATION int64 PIO_STACK_LOCATION integer NTSTATUS PKTIMER longword longint BOOLEAN LONG PKDPC pint64 pansichar KDPC pchar pextended pstring widechar widestring pwidechar pwidestring real pdatetime pcurrency real48 pshortstring single string smallint shortstring shortint pansistring word PDRIVER_OBJECT KTIMER PUNICODE_STRING PDEVICE_OBJECT DEVICE_OBJECT BYTE word LIST_ENTRY byte UNICODE_STRING PVOID DRIVER_OBJECT DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';

var my_function = 'SDL_Init stringRGBA SDL_Flip SDL_Delay SDL_Quit CreateForm Run Initialize SDL_SetVideoMode MessageBox KeReadStateSemaphore KeReleaseSemaphore KeInitializeSemaphore KeReleaseMutex KeInitializeMutex KeReleaseSpinLock KeAcquireSpinLock RunMe Unload MyThread IrpPnp AddDevice main WdfTimerStart WdfTimerStop WdfTimerCreate WdfDeviceWdmGetDeviceObject WDF_TIMER_CONFIG_INIT_PERIODIC WDF_OBJECT_ATTRIBUTES_INIT WdfRequestSetInformation WdfMemoryGetBuffer WdfRequestRetrieveUnsafeUserOutputBuffer WdfRequestProbeAndLockUserBufferForWrite WdfRequestRetrieveUnsafeUserInputBuffer WdfRequestProbeAndLockUserBufferForRead sizeof WdfRequestRetrieveOutputWdmMdl WdfRequestRetrieveInputWdmMdl WdfRequestRetrieveOutputMemory WdfMemoryCopyFromBuffer WdfRequestRetrieveInputMemory WdfMemoryCopyToBuffer WdfRequestComplete WdfRequestCompleteWithInformation IoAttachDeviceToDeviceStack WdfDeviceInitSetIoType WDF_FILEOBJECT_CONFIG_INIT WdfDeviceInitSetFileObjectConfig WdfDeviceCreateSymbolicLink WDF_IO_QUEUE_CONFIG_INIT_DEFAULT_QUEUE WdfIoQueueCreate WdfDeviceInitAssignName WdfDeviceCreate KiAcquireSpinLock WDF_DRIVER_CONFIG_INIT WdfDriverCreate IoDetachDevice IoSkipCurrentIrpStackLocation IoCallDriver KiReleaseSpinLock IoCompleteRequest NT_SUCCESS StrCopy WriteLn IoStartTimer IoStopTimer Format FillChar _DriverEntry IoInitializeTimer memset memcpy crt_printf DeviceIoControl KeSetTimerEx KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer wsprintf sprintf KeInitializeTimer IsListEmpty RemoveHeadList InsertHeadList InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

this.regexList = [
{regex: /\(\*[\s\S]*?\*\)/gm, css: 'my_comment' },
{regex: /{(?!\$)[\s\S]*?}/gm, css: 'my_comment' },
{regex: SyntaxHighlighter.regexLib.singleLineCComments,  css: 'my_comment' },
{regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },
{regex: /\{\$[a-zA-Z]+ .+\}/g, css: 'color1' },
{regex: /\b[\d\.]+\b/g, css: 'value' },
{regex: /\$[a-zA-Z0-9]+\b/g, css: 'value' },
{regex: /^ *\.386.*/gm, css: 'my_preprocessor'},
{regex: /^ *\.model.*/gm, css: 'my_preprocessor'},
{regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
{regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
{regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
{regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
];
};

Brush.prototype  = new SyntaxHighlighter.Highlighter();
Brush.aliases  = ['delphi', 'pascal', 'pas'];
SyntaxHighlighter.brushes.Delphi = Brush;
typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
